eat food for food in ["fish", "meat", "vegetable"]

courses = ['greens', 'caviar', 'truffles', 'roast', 'cake']
menu i + 1, dish for dish ,i in courses

foods = ['broccoli', 'spinach', 'chocolate']
eat food for food in foods when food isnt "chocolates"

countdown = (num for num in [10..1])

yearsOld = max: 10, ida: 9, tim: 11

ages = for child, age of yearsOld
  "#{child} is #{age}"


if this.studyingEconomics
  buy() while supply > demand
  sell() until supply < demand

num = 10
lyrics = while num -= 1
  "#{num} little monkeys, jumping on the bed.
    One fell out and bumped his head."

for filename in list
  do (filename) ->
    fs.readFile filename, (err, contents) ->
      compile filename, contents.toString()

