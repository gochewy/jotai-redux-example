import { GraphQLClient } from "graphql-request";
import { getSdkWithHooks } from "../../generated/graphql";

export default function getSdk() {
    return getSdkWithHooks(new GraphQLClient(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/graphql`))
}