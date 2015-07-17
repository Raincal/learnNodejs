a = 1
b = 2
[a, b] = [b, a]

weatherReport = (location) ->
  [location, 72, "Mostly Sunny"]

[city, temp, forecast] = weatherReport "Berkeley, CA"


futurists =
  sculptor: "Umberto Boccioni"
  painter: "Vladimir Burliuk"
  poet:
    name: "F.T. Marinetti"
    address: [
      "Via Roma 42R"
      "Bellagio, Italy 22021"
    ]

{poet: {name, address: [street, city]}} = futurists


###tag = "<impossible>"

[open, contents..., close] = tag.split("")###

text = "Every literary critic believes he will outwit history and huave the last word"
[first, ..., last] = text.split " "

class Person
  constructor: (options) ->
    {@name, @age, @length} = options

tim = new Person age: 4