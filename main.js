var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","Screen Shot 2021-11-25 at 4.44.07 PM.png", "IMG_5605.jpeg" , "IMG_6154.jpeg", "IMG_6286.jpeg", "IMG_6682.jpeg","IMG_6198.jpeg"];
var names = ["Family Book","Akshat Mishra", "Adyant Mishra", "Lopamudra Mishra", "Debashaish Mishra", "Piper Mishra", "Family"];
var i = -1;
var f = -1;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
      
      f++;
      var numbers_of_family_name_in_array = 6
      if(f > numbers_of_family_name_in_array)
        {
            f = 0;
        }

    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[f];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
