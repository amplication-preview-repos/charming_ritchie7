import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserDetailsList } from "./userDetails/UserDetailsList";
import { UserDetailsCreate } from "./userDetails/UserDetailsCreate";
import { UserDetailsEdit } from "./userDetails/UserDetailsEdit";
import { UserDetailsShow } from "./userDetails/UserDetailsShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { UserPaymentProcessingStateList } from "./userPaymentProcessingState/UserPaymentProcessingStateList";
import { UserPaymentProcessingStateCreate } from "./userPaymentProcessingState/UserPaymentProcessingStateCreate";
import { UserPaymentProcessingStateEdit } from "./userPaymentProcessingState/UserPaymentProcessingStateEdit";
import { UserPaymentProcessingStateShow } from "./userPaymentProcessingState/UserPaymentProcessingStateShow";
import { PaymentDetailsList } from "./paymentDetails/PaymentDetailsList";
import { PaymentDetailsCreate } from "./paymentDetails/PaymentDetailsCreate";
import { PaymentDetailsEdit } from "./paymentDetails/PaymentDetailsEdit";
import { PaymentDetailsShow } from "./paymentDetails/PaymentDetailsShow";
import { OrderProcessingStateList } from "./orderProcessingState/OrderProcessingStateList";
import { OrderProcessingStateCreate } from "./orderProcessingState/OrderProcessingStateCreate";
import { OrderProcessingStateEdit } from "./orderProcessingState/OrderProcessingStateEdit";
import { OrderProcessingStateShow } from "./orderProcessingState/OrderProcessingStateShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"UserInteractionService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserDetails"
          list={UserDetailsList}
          edit={UserDetailsEdit}
          create={UserDetailsCreate}
          show={UserDetailsShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="UserPaymentProcessingState"
          list={UserPaymentProcessingStateList}
          edit={UserPaymentProcessingStateEdit}
          create={UserPaymentProcessingStateCreate}
          show={UserPaymentProcessingStateShow}
        />
        <Resource
          name="PaymentDetails"
          list={PaymentDetailsList}
          edit={PaymentDetailsEdit}
          create={PaymentDetailsCreate}
          show={PaymentDetailsShow}
        />
        <Resource
          name="OrderProcessingState"
          list={OrderProcessingStateList}
          edit={OrderProcessingStateEdit}
          create={OrderProcessingStateCreate}
          show={OrderProcessingStateShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
