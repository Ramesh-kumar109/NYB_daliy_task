import User_HOC from './User_HOC';
import Product_Hoc from './Product_Hoc';
import WithLoading from './WithLoading';

const UserWithLoading = WithLoading(User_HOC);
const ProductLoading = WithLoading(Product_Hoc);

function ManagedData() {
  return (
    <div>
      <UserWithLoading isLoading={false} name="Ramesh Kumar A" />
      <ProductLoading isLoading={false} name="Mobile Phone " />
    </div>
  );
}

export default ManagedData;