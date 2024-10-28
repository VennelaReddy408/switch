// examples pd switch
switch("mocks"){
    case "Home":
        console.log("my profile and details")
        break;
        case "classes":
            console.log("8 classe")
            break;
            case "notes":
                console.log("23 notes")
                break;
                case "assignments":
                    console.log("assessments are last")
                    break;
                    default:
                        console.log("select something from the left sidebar")
}

switch("apple"){
    case "banana":
        console.log("I hate banana")
        break;
        case "orange":
            console.log("orange is very tasty")
            break;
            case "apple":
                console.log("apple is my fav fruit")
                break;
                default:
                    console.log("I dont like any fruit")

}


// examples of for of
var b="vamsi"
var result=""
for(var char of b){
    result=result+char
}
console.log(result)


var a=[1,2,3,4,5]
var totalSum=0
for(var sum of a){
    totalSum=totalSum+sum
}
console.log(totalSum)