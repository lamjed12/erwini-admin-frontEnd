import { agriculteur } from "./agriculteur"

export class notification {
    
    _id : Number | undefined
    agriculteur : agriculteur | undefined
    date : String | undefined
    action: String | undefined
    // level : String | undefined
    // titre : String | undefined
    // duration  : String | undefined
    // nbQuestion : String | undefined
    // langue  : String | undefined
}