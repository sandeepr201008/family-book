        var members_array = [
        "familybook.png", 
        "granny.jpg", 
        "brother.png", 
        "sister.png", 
        "mother.png", 
        "father.jpg"
        ];
    
        var names_array = [
        "My Family-Book", 
        "banumathy", 
        "Sandeep", 
        "Vidula", 
        "Priya",
        "Rajagovarthanan"];
        
    
        var count = 0;
    
        function nextslide()
        {
    
        document.getElementById("members").src = members_array[count];
        document.getElementById("names").innerHTML = names_array[count];
        count++;
    
        if (count == 6) {
        
        count = 0;
    
        }
    
        
    }
    
