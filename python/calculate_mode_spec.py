# Write your own unit tests here!
from calculate_mode import calculate_mode

print(calculate_mode([1,2,3,2,5]) == 2)
print(calculate_mode([22,1,45,987,2,22]) == 22)
print(calculate_mode(["red","box", "cat", "poe", "poe"]) == "poe")
print(calculate_mode(['nice', 'nice', 'red', 'nice', 99]) == "nice")
print(calculate_mode(["w", 4, "w", 4, "w", "w", "w", 4, 4, 4, 4]) == 4)