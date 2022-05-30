## Book Catalog

A book catalog will list book, text resources. Each book will have a title, author, description, and blurb for display purposes. Each book will also have a slug which will be used for routing purposes. Each book will be accesible at a route `/books/<book-slug>`, where `book-slug` is dynamic per book.

Each book will be composed of parts. Each part will have futher sub-parts. This resembles the structure of book, part, chapter, chapter section, etc. while allowing the developer (and authors) to add however many nested sub-parts. To accomplish the relation of part to child-part, a parent key will be recorded on the child part. A list of all child parts for a given book part can be found by querying for all resourcess with a parent key matching the primary key of the interested book part.


