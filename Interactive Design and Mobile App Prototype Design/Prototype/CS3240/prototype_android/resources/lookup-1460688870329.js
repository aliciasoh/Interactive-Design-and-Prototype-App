(function(window, undefined) {
  var dictionary = {
    "2cce200a-d152-4cc6-9bc0-7ab6b1303f5f": "Main",
    "f1619bdd-1454-4ebe-895c-c25563795fc1": "Chat",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Login",
    "1a673c13-deee-4e7f-9f3a-4cb65bdff874": "Notifications",
    "ab859da8-164a-40d0-ac4a-8cddb56cf40e": "Module",
    "777823c9-a1bc-478d-a7f2-c995b358061c": "Profile",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);