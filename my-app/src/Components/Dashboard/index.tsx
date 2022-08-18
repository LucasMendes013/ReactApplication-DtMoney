import { Susu } from "../Susu";
import { TransactionsTable } from "../TransectionsTable";
import { Container } from "./styles";


export function Dashboard() {
    return (
        <Container> 
            
            <Susu />
            <TransactionsTable />
          
        </Container>
    );
}

