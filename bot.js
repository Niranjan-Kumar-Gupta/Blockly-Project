Blockly.defineBlocksWithJsonArray([
    {
      "type": "question",
      "message0": "Bot %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [
            ["select a question", " "],
            ["What is the date today?", "9 jan"],
            ["What is the time now?", "10:45am"],
            ["How are you?", "I am fine"],
            ["What is JavaScript?", "JavaScript is the Programming Language for the Web"],
            ["What is your name?", "Niranjan"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 255
    }
  ]);

  Blockly.JavaScript['question'] = function (block) {         
    return  block.getFieldValue('VALUE')+'<hr/>';
  }
