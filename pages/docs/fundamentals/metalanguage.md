# Otterkit COBOL Metalanguage

Throughout this documentation website we'll be explaining
COBOL syntax using a slightly modified version of the
[COBOL Metalanguage](https://en.wikipedia.org/wiki/COBOL#Metalanguage).
This allows for more convenient formatting on this website.

The changes were made due to Markdown not allowing underlined text,
and also because vertically stacking different tokens inside of braces
and brackets is impractical in plain text and Markdown[^1].

The COBOL metalanguage was originally developed by the
[CODASYL committee](https://en.wikipedia.org/wiki/CODASYL)
for the COBOL specifications.

| Appearance            | Example        | Purpose                                                                 |
| --------------------- | -------------- | ----------------------------------------------------------------------- |
| Capitalized           | FUNCTION       | Optional reserved word                                                  |
| Bold with an Asterisk | **ACCEPT\***   | Required reserved word                                                  |
| Braces                | { --, -- }[^2] | Only one token can be chosen                                            |
| Brackets              | [ -- ]         | Zero or one tokens can be chosen                                        |
| Ellipsis              | **...**        | The previous token can be repeated                                      |
| Braces with bars      | {\| --, -- \|} | One or more tokens can be chosen, but any token can only be chosen once |
| Brackets with bars    | [\| --, -- \|] | One or more tokens can be chosen, but any token can only be chosen once |

[^1]:
    Instead of vertically stacking tokens and reserved keywords,
    we're separating them with commas, which is more practical than
    scaling the size of the braces and brackets to fit all vertically
    stacked tokens inside.

[^2]:
    The " --, -- " inside of the braces and brackets represent the
    different tokens and words separated by commas.
