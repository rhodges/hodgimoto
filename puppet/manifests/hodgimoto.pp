if $user == undef {
    $user = 'vagrant'
}
if $group == undef {
    $group = 'vagrant'
}
if $project_dir == undef {
    $project_dir = '/usr/local/apps/'
}
if $settings_template == undef {
    $settings_template = "settings_template.py.erb"
}
if $url_base == undef {
    $url_base = 'http://localhost'
}
if $pgsql_base == undef {
    $pgsql_base = '/var/lib/postgresql/'
}
if $num_cpus == undef {
    $num_cpus = 1
}

#####################################################################
# ensure that apt update is run before any packages are installed
class apt {
  exec { "apt-update":
    command => "/usr/bin/apt-get update"
  }
  # Ensure apt-get update has been run before installing any packages
  Exec["apt-update"] -> Package <| |>
}
include apt

package { "build-essential": ensure => "installed"}
package { "python-software-properties": ensure => "installed"}
package { "git-core": ensure => "latest"}
package { "unzip": ensure => "latest"}
package { "vim": ensure => "latest"}
package { "python-psycopg2": ensure => "latest"}
package { "python-virtualenv": ensure => "latest"}
package { "python-dev": ensure => "latest"}
package { "python-setuptools": ensure => "latest"}
package { "python-pip": ensure => "latest"}
package { "python-numpy": ensure => "latest"}
package { "supervisor": ensure => "latest"}

package { "default-jre": ensure => "installed"}
package { "libjpeg-dev": ensure => "installed"} 
package { "libfreetype6-dev": ensure => "installed"} 
package { "zlib1g-dev": ensure => "installed"} 
package { "libxml2-dev": ensure => "installed"} 
package { "libxslt1-dev": ensure => "installed"} 
# package { "rabbitmq-server": ensure => "installed"}
# package { "mongodb": ensure => installed}

package { "php5-fpm": ensure => installed}
package { "php5-xsl": ensure => installed}
package { "php5-curl": ensure => installed}
package { "php-apc": ensure => installed}
package { "php5-mcrypt": ensure => installed}
package { "php5-mysql": ensure => installed}

package {'atop': ensure => "latest"}
package {'htop': ensure => "latest"}
package {'sysstat': ensure => "latest"}
package {'iotop': ensure => "latest"}

# class {'nullmailer': adminaddr => "email@email.com", remoterelay => "mail.google.com"}

#class { 'mysql::server':
#  config_hash => { 'root_password' => 'enketo' }
#}

#mysql::db { 'enketo':
#  user     => 'enketo',
#  password => 'enketo',
#  host     => 'localhost',
#  grant    => ['all'],
#}


# use uwsgi packages but only for the config system; binary is out of date! 
# see https://code.djangoproject.com/ticket/20537
package {'uwsgi': ensure => "latest"}
exec { "uwsgi":
    command => "/usr/bin/pip install 'uwsgi>=1.2.6'",
    require => Package['uwsgi']
}
file { "hodgimoto.ini":
  path => "/etc/uwsgi/apps-available/hodgimoto.ini",
  content => template("hodgimoto.uwsgi.erb"),
  require => Exec['uwsgi']
}
file { "/etc/init.d/uwsgi":
  path => "/etc/init.d/uwsgi",
  content => template("uwsgi.init.erb"),
  require => Exec['uwsgi'],
  mode => 0755
}
file { "/etc/uwsgi/apps-enabled/hodgimoto.ini":
  ensure => 'link',
  target => '/etc/uwsgi/apps-available/hodgimoto.ini',
  require => File['hodgimoto.ini']
}

package {'nginx-full': ensure => "latest"}
file {"hodgimoto":
  path => "/etc/nginx/sites-available/hodgimoto",
  content => template("hodgimoto.nginx"),
  require => Package['nginx-full']
}
file { "/etc/nginx/sites-enabled/hodgimoto":
   ensure => 'link',
   target => '/etc/nginx/sites-available/hodgimoto',
   require => File['hodgimoto']
}
file { "/etc/nginx/sites-enabled/default":
   ensure => 'absent',
   require => Package['nginx-full']
}

class { "postgresql::server": version => "9.1",
    listen_addresses => "'*'",  # TODO localhost',
    max_connections => 100,
}

postgresql::database { "hodgimoto":
  owner => $user,
}

python::venv::isolate { "/usr/local/venv/hodgimoto":
  subscribe => [Package['python-virtualenv'], Package['build-essential']]
}

file { "local_settings.py":
  path => "$project_dir/hodgimoto/hodgimoto/local_settings.py",
  content => template($settings_template)
}

file { "go":
  path => "/home/$user/go",
  content => template("go"),
  owner => $user,
  group => $group,
  mode => 0775
}

#file { "celeryd.conf":
#  path => "/etc/supervisor/conf.d/celeryd.conf",
#  content => template("celeryd.erb"),
#  require => Package['supervisor']
#}
