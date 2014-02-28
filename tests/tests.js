

test('assertions', function(){
  var struct = {
        "tag": "actualTag",
        "value": "actualValue",
        "attr": [
          {"tag": "attrTag1", "value": "attrValue1"},
          {"tag": "attrTag2", "value": "attrValue2"},
          {"tag": "attrTag3", "value": "attrValue3"},
          {"tag": "attrTag4", "value": "attrValue4"}
        ]
      },
      newStruct = convertIt(struct),
      msg = "%s converted properly.",
      i = 0;

    for ( var k in newStruct ) {
        if ( i === 0 ) {
          equal(struct.tag, k, msg.replace("%s", "Tag"));
          equal(struct['value'], newStruct[k], msg.replace("%s", "Value"));
        }
        i++;
    }
    i = 0;
    for ( var k in newStruct.attr ) {
      equal(struct.attr[i].tag, k, msg.replace("%s", "Attr's value"));
      equal(struct.attr[i]['value'], newStruct.attr[k], msg.replace("%s", "Attr's value"));
      i++;
    }

    ok(newStruct.attr.toString() === "[object Object]", "Attr is now an object instead of an array.");


});