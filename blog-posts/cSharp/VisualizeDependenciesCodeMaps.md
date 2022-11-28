(1). In Solution Explorer, select the projects, assembly references, folders, files, types, or members that you want to map.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fgg5qkwh5bu2roo0it7q.png)

(2). On the Solution Explorer toolbar, choose Show on Code Map Create New Graph From Selected Nodes Button. Or, open the shortcut menu for one or a group of items and choose Show on Code Map.

You can also drag items from Solution Explorer, Class View, or Object Browser, into a new or existing code map. To include the parent hierarchy for your items, press and hold the Ctrl key while you drag items, or use the Include Parents button on the code map toolbar to specify the default action. You can also drag assembly files from outside Visual Studio, such as from Windows Explorer.

(3). The map shows the selected items within their containing assemblies.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l769tyi2jaomq4ahgt23.png)

(4). To explore items, expand them. Move the mouse pointer on top of an item, then click the chevron (down arrow) icon when it appears.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p38x5r2foozz03w1z4bb.png)

To expand all items, select them using Ctrl+A, then open the shortcut menu for the map and choose Group > Expand. However, this option isn't available if expanding all groups creates an unusable map or memory issues.

(5). Continue to expand items you are interested in, right down to the class and member level if necessary.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lt0pr8l4g23qp50q2zzm.png)

To see members that are in the code but don't appear on the map, click the Refetch Children icon Refetch Children Icon in the top left corner of a group.

(6). To see more items related to those on the map, select one and choose Show Related on the code map toolbar, then select the type of related items to add to the map. Alternatively, select one or more items, open the shortcut menu, and then choose the Show option for the type of related items to add to the map.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sf0t3jat88wlvfi4xu83.png)

(7). The map shows the relationships. In this example, the map shows the methods called by the Find method and their location in the solution or externally.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3e90ut7pu3j6yb8miogp.png)

(8). To simplify the map and focus on individual parts, choose Filters on the code map toolbar and select just the types of nodes and links you are interested in. For example, turn off display of Solution Folders, Assemblies, and Namespaces.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xtnkuzs6wulj6ou2qpgt.png)

Ref: https://docs.microsoft.com/en-us/visualstudio/modeling/map-dependencies-across-your-solutions?view=vs-2019
