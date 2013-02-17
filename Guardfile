# A sample Guardfile
# More info at https://github.com/guard/guard#readme

# Add files and commands to this file, like the example:
#   watch(%r{file/path}) { `command(s)` }




guard 'shell' do

  ember_app_dir = 'emberguides'
  built_files = %W[application.js index.js templates.js]

  watch(/#{ember_app_dir}\/(.*)/) do |m|
    `cd #{ember_app_dir} && ember build` unless built_files.include?(m[1])
  end

end
