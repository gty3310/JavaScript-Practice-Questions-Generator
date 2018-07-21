require 'csv'
require 'colorize'

# Instructions
system("clear")
puts "Welcome to Mallory's a/A Practice Assessment Generator".cyan
puts "This generator will create a practice test based on your input. "
puts "This program will generate 3 files in this folder: practice_test, spec, and solution. " \
      "Complete the practice_test file, running the spec file (SpecRunner.html) to check your answers. "
puts "You can pick from the following questions names:"
puts  "base_converter        	          	my_find
  binary_search        		        my_flatten
  bubble_sort        	  		my_inject
  caesar_cipher         		my_join
  deep_dup        	    		my_reject
  digital_root        			my_reverse
  doubler        		      	my_rotate
  dups        	      			my_slice
  exponent            			my_some
  factorials_rec        		permutations
  factors        	      		pig_latinify
  fibs_sum            			prime_factorization
  first_even_numbers_sum                primes
  inherits            			quicksort
  jumble_sort         			real_words_in_string
  median        	      		rec_sum
  merge_sort          			string_include_key
  my_bind        	      		subsets
  my_call        	      		symmetric_substrings
  my_curry            			titleize
  my_each             			transpose
  my_every            			two_sum
  my_filter
"

# read in csv with test info
tests = CSV.read('list.csv', headers: true, header_converters: :symbol, converters: :all)

# list possible categories
categories = Array.new
tests.each do |test|
  categories << test[1]
end
categories = categories.uniq
puts "Possible categories: #{categories.join(", ")}".magenta
puts

# get user request
puts "Input your requests, separated by commas and spaces please"
puts "Example input: " + "two_sum".yellow
input = gets.chomp

# create new test, spec and solution files
practice_test = File.open("practice_test.js", "w")
spec = File.open("spec.js", "w")
solution = File.open("solution.js", "w")


# go through master tests and add text to the new files

  practice_test << File.read('problems/'+ input +'.js') << "\n"
  spec << File.read('specs/'+ input +'_spec.js') << "\n"
  solution << File.read('solutions/'+ input +'_solution.js') << "\n"


# close the files that were just created
practice_test.close
spec.close
solution.close

puts
puts "Done!"
