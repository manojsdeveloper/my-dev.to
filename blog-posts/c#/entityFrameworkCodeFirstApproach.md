---
title: 
published: false
description: 
tags: 
cover_image:
canonical_url:
---

Entity Framework is the Microsoft preferred method of data access for .NET applications. It supports strongly-typed access through LINQ. Entity Framework also allows developers to program against a conceptual model that reflects application logic rather than a relational model that reflects the database structure.

## Code First Approach
The Code First Approach provides an alternative to the Database First and Model First approaches to the Entity Data Model and creates a database for us based on our classes.

## Code-First Workflow
The following figure illustrates the code-first development workflow.

The development workflow in the code-first approach would be: Create or modify domain classes -> configure these domain classes using Fluent-API or data annotation attributes -> Create or update the database schema using automated migration or code-based migration.

The Code-First approach also requires a context class which should be derived from DbContext class. Create a context class as shown below. It derives from DBContext class and exposes DbSet properties for the types that you want to be part of the model.
