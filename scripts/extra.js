section.waypoint(function(){
    var switchId = $(this.element).attr('id');
    console.log(switchId);
    
    switch(switchId){
            
        case 'cover':
            $('#cov').focus();
        break;
            
        case 'services':
            $('#ser').focus();
        break;

        case 'works':
            $('#wor').focus();
        break;
            
        case 'skills':
            $('#ski').focus();
        break;
        
        case 'about':
            $('#abo').focus();
        break;
            
        case 'contact':
            $('#con').focus();
        break;
            
            
    }