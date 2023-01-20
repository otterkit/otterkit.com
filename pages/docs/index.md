# Getting Started with Otterkit COBOL

Warning: The Otterkit compiler is not yet production ready. We do not recommend using it in a production environment until the codebase is more mature and stable!

## About

COBOL was created in 1959 by the [CODASYL Committee](https://en.wikipedia.org/wiki/CODASYL) (With Rear Admiral Grace Hopper as a technical consultant to the committee), its design follows Grace Hopper's belief that programs should be written in a language that is close to English. It prioritizes readability, reliability, and long-term maintenance. The language has been implemented throughout the decades on many platforms with many dialects, and the Otterkit COBOL compiler is a free and open source implementation of the ISO COBOL 2022 Standard on the .NET platform.

## Installing the Otterkit compiler

### Quick Install

Otterkit is available to install on the [Nuget package manager](https://www.nuget.org/packages/Otterkit/) ([.NET 7](https://dotnet.microsoft.com/en-us/download/dotnet/7.0) is required). To install, type into the command line:
```
dotnet tool install --global Otterkit --version 1.0.15-alpha
```

### Build from Source

First, clone the git repo from [https://github.com/otterkit/otterkit.git](https://github.com/otterkit/otterkit.git) to get the source code. To access the libotterkit submodule inside, use the `--recurse-submodules --remote-submodules` flag on the clone command. To run, navigate into the `src` folder (for the compiler, not libotterkit) and then type `dotnet run` into the command line.

## Otterkit COBOL Hello World

Here's an example of a basic Hello World program in COBOL.

```cobol

       identification division.
         program-id. hello-world.
       procedure division.
         display 'Hello, World!'.
         stop run.

```

COBOL has an most English-like syntax making it easy to read and
understand what it's trying to accomplish. In the next section
we'll show how you can compile and run this Hello World example.

## Compiling and running your code

TODO: Compilation Instructions...

## What next?

TODO: What next section...
