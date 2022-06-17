type AppState = {
  selectedCompanyIndex: number;
  selectedCompany: Company;
  companyList: CompanyList;
};

type Company = {
  id: String;
  name: String;
  description: String;
  phone: String;
  image: String;
  email: String;
  address: Address;
};
type Address = {
  number: String;
  street: String;
  zip: String;
  city: String;
  country: String;
};

type CompanyList = Company[];
