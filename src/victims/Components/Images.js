import React from "react"
class Pictures extends React.Component{
    
    constructor(props){
        super(props)
        this.changeBorder=this.changeBorder.bind(this)
    }
    changeBorder(e){
        switch(this.props.name){
            case 'water':
                this.SingleImageSelected(e,"water-selected")
                break;
            case 'food':
               this.SingleImageSelected(e,"food-selected")
               break;
            case 'flood':
                this.SingleImageSelected(e,"flood-selected")
                break;
            case 'medecin':
                this.ImageSelected(e, 'medecin')
                var input_field = document.querySelectorAll("#medecin_name");
                if (input_field!=null){
                if(input_field.length) {
                    var i;
                    for(i=0; i<input_field.length; i++)
                    input_field[i].classList.add("medecin_name");
                }}
                var minus_button = document.querySelectorAll("#MedecinMinusButton");
                if(minus_button!=null){
                if(minus_button.length) {
                    var i;
                    for(i=0; i<minus_button.length; i++)
                    minus_button[i].classList.add("MedecinButton");
                }}
                console.log(input_field)
                var add_button = document.querySelector("#MedecinAddButton");
                add_button.classList.toggle("MedecinButton")
                break
            case 'toilet':
                this.ImageSelected(e,'toiletery')
                this.MultipleImageSelected(e,"toiletery_picture")
                var subToiletery = document.querySelector("#Toiletery");
                subToiletery.classList.toggle("Toiletery")

                break
            case 'toiletery':
                this.ImageSelected(e, 'toiletery')
                break
            case 'pet':
                this.ImageSelected(e,'pet_food')
                this.MultipleImageSelected(e,"pet_food_picture")
                var subToiletery = document.querySelector("#pet_food");
                subToiletery.classList.toggle("pet_food")

                break
            case 'pet_food':
                this.ImageSelected(e,'pet_food')
                break
            case 'housing':
                this.ImageSelected(e,'housing_items')
                this.MultipleImageSelected(e,"housing_items_picture")
                var subToiletery = document.querySelector("#housing_items");
                subToiletery.classList.toggle("housing_items")

                break
            case 'housing_items':
                this.ImageSelected(e,'housing_items')
                break



        }}

SingleImageSelected(e,pictureClassName){
    var x = document.querySelectorAll("."+pictureClassName);
        if(x.length) {
            x[0].classList.remove(pictureClassName);
        }
        let target = e.currentTarget
        target.classList.toggle(pictureClassName)
}
MultipleImageSelected(e,pictureClassName){
    var petFoodBorder = document.querySelectorAll("."+pictureClassName)
    if(petFoodBorder.length) {
        var i;
        for(i=1; i<petFoodBorder.length; i++)
        petFoodBorder[i].classList.remove(pictureClassName);
    }
}

ImageSelected(e,pictureClassName){
    let target = e.currentTarget
    target.classList.toggle(pictureClassName + "_picture")
}

    render(){

    return(
            <img src={this.props.path} onClick = {this.changeBorder} className='pictures' id={this.props.name}/>

        
    )
    }
}

export default Pictures