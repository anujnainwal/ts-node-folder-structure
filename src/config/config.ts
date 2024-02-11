const whiteList: [string, string, string] = ["http://localhost:8080", "http://localhost:3000", ""];

const corsOption: Object = {
    origin: function (origin:string, callback:any) {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null,true)
        } else {
            callback(new Error("Not allowed by cors."))
        }
    }
}

export default corsOption