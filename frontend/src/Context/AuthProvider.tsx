import { createContext, ReactNode } from "react";
import { iProduct } from "../interfaces/adverts.interfaces";

export interface IContext{
    auctions: Array<iProduct>

}

export interface IProviderProps {
    children: ReactNode
}

export const AuthContext = createContext<IContext>({} as IContext)

const AuthProvider = ({children}: IProviderProps)=>{
    const user1 = { name: "Rodrigo Tavares" };
    const user2 = { name: "Tiago" };

    const auctions = [
        {
          title_adverts: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 ",
          description_adverts:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
          user: user1,
          year_adverts: 2013,
          kilometers_adverts: 0,
          price_adverts: 99999.99,
        },
        {
          title_adverts: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 ",
          description_adverts:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
          user: user2,
          year_adverts: 2013,
          kilometers_adverts: 0,
          price_adverts: 99999.99,
        },
        // {
        //   title_adverts: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 ",
        //   description_adverts:
        //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
        //   user: user2,
        //   year_adverts: 2013,
        //   kilometers_adverts: 0,
        //   price_adverts: 99999.99,
        // },
        // {
        //   title_adverts: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 ",
        //   description_adverts:
        //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
        //   user: user2,
        //   year_adverts: 2013,
        //   kilometers_adverts: 0,
        //   price_adverts: 99999.99,
        // },
      ];

      const test = ()=>{
        console.log(auctions)
      }
    //   console.log(auctions)
      return(
        <AuthContext.Provider value={{
            auctions

        }}>
            {children}
        </AuthContext.Provider>
      )
}

export default AuthProvider