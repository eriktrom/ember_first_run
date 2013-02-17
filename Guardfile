# A sample Guardfile
# More info at https://github.com/guard/guard#readme

# Add files and commands to this file, like the example:
#   watch(%r{file/path}) { `command(s)` }
#
guard 'shell' do

  watch(/emberguides\/(.*)/) do |m|
    `rakep && ember build`
  end

  # public_input = 'compiled'
  # built_files = %W[application.js index.js templates.js]
  # ember_built = false
  #
  # unless ember_built
  #   watch(/#{public_input}\/(.*)/) do |m|
  #     unless built_files.include?(m[1]) ||
  #            changed_rakep_files.include?(m[1]) ||
  #            changed_rakep_files.include?(ember_app_source + '/' + m[1])
  #       `ember build`
  #       ember_built = true
  #     end
  #   end
  # end


end


