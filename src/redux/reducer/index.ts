import { Action, Category, ProductDetail, StateTypes } from "../../Interfaces/Interfaces";
import {
    GET_CATEGORIES,
    GET_PRODUCTS,
    GET_PRODUCTS_BY_NAME,
    GET_FOOD_BY_ID,
    EMPTY_FOOD,
    ACTUALIZAR_CART,
    ADD_TO_CART,
    DELETE_FOR_CART,
    ERROR_HANDLER,
    CLEAN_ERROR,
    GET_USER_BY_ID,
    GET_ALL_USERS,
    GET_USER

} from "../actions";

const initialState: StateTypes = {
    products: [],
    categories: [],
    detail: [],
    cart: [],
    userDetail: [],
    allUsers: [],
    error: '',
    user: ''
}


export default function rootReducer(state = initialState, action: Action) {
    switch (action.type) {

        case GET_PRODUCTS:
            return {
                ...state,
                backup: action.payload,
                products: action.payload
            }

        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            }

        case GET_ALL_USERS: 
            return{
                ...state,
                allUsers: action.payload
            }

        case GET_PRODUCTS_BY_NAME:
            let categorias = action.payload.res
            let Productosfiltrados = categorias.map((producto: Category) => {
                producto.categoryProducts = producto.categoryProducts.filter((data: ProductDetail) => data.name.toLowerCase().includes(action.payload.name.toLowerCase()))
                return producto
            })

            return {
                ...state,
                categories: Productosfiltrados
            }

        case GET_FOOD_BY_ID:
            return {
                ...state,
                detail: action.payload
            }

        case GET_USER_BY_ID: 
            return {
                ...state,
                userDetail: action.payload

            }

        case EMPTY_FOOD:
            return {
                ...state,
                detail: []
            }

        case ACTUALIZAR_CART:
            return {
                ...state,
                cart: action.payload,
            }

        case ADD_TO_CART:

                return {
                ...state,
                cart: [...state.cart, action.payload]
                }

        case DELETE_FOR_CART:
            if (action.payload === "All") {
                return {
                    ...state,
                    cart: [],
                }
            }
            else {
                return {
                    ...state,
                    cart: state.cart.filter((item) => item._id !== action.payload),
                }
            }

        case ERROR_HANDLER:
            return {
                ...state,
                error: action.payload
            }
        case CLEAN_ERROR:
            return {
                ...state,
                error: ''
            }
        
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}