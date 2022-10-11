# CONCAT Function

### Description:

This function concatenates two or more strings and
returns the concatenated string[^1].

### Types:

| Argument Type          | Return Type[^1] |
| ---------------------- | --------------- |
| Alphabetic             | Alphabetic      |
| Alphanumeric           | Alphanumeric    |
| Boolean usage display  | Alphanumeric    |
| Numeric usage display  | Alphanumeric    |
| Boolean usage national | Alphanumeric    |
| Numeric usage national | Alphanumeric    |
| National               | National        |

### Usage example:

> **FUNCTION\*** **CONCAT\*** ( string string **...** )

[^1]:
    The exact type of the returned string depends on
    the argument types that were passed to the function.
    (If the argument types were Alphabetic then the returned string will have an Alphabetic type)
