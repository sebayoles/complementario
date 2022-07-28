let nombre = prompt("Nombre de usuario");

    while (nombre  != "ESC" ) {
        switch (nombre) {
        case "seba":
            alert("Hola seba")
            break;

            case "luis":
                alert("Hola luis")
                break;

                case "gonzalo":
                    alert("Hola gonzalo")
                    break;

                    case "coderhouse":
                        alert("Hola coder")
                        break;
    
        default:
            alert("Prueba con seba, luis, gonzalo o coderhouse");
            break;
        }nombre = prompt("Ingresa nuevamente un nombre de usuario")
    } 
 
