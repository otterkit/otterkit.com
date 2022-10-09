# BASECONVERT Function

### Description:
This function converts a string[^1] of characters in one base to the 
equivalent string of characters in another base.

The first argument is the input string[^1] to be converted, the second
argument is the current base of the input string, and the third
argument is the target base.

### Types:

| Argument Type | Return Type  |
| ------------- | ------------ |
| Alphanumeric  | Alphanumeric |
| National      | National     |

### Usage example:

> **FUNCTION\*** **BASECONVERT\*** ( string[^1] current-base target-base )

[^1]: The function can also accept an unsigned integer as
  its first argument when the current base is equal or less
  than 10.