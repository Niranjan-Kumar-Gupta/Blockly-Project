

  (function () {

   
    let answer =  document.getElementById('ans');

    document.getElementById('reset').addEventListener('click',()=>{
      let workspace = Blockly.getMainWorkspace();
      workspace.clear();
      answer.innerHTML = ''
    })
      
  
  document.getElementById('run').addEventListener('click',()=>{
   
    let code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
    answer.innerHTML = code; 

  })
    

    Blockly.inject('blocklyDiv', {
      toolbox: document.getElementById('toolbox'),
      scrollbars: false
    });
  })()

  