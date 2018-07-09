exports.config ={
// address of the running selenium server
    seleniumAddress: 'http://localhost:4444/wd/hub',


    capabilities: {
        'browserName': 'chrome'
        
    },  

    framework: 'jasmine',

    //spec patterns are relative to the current working directly 
    // when protractor  is called
    specs:['../test/search_spec.js'],
   
    jasmineNodeOpts: {
        defaultTimeoutInterval: 180000,
      }

      
};