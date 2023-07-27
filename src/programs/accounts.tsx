import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

const accounts: {
  [program: string]: {
    title: string;
    description: string;
    pda_seeds: string;
    pda_link: string;
    rust_link: string;
    solita_link: string;
    fields: {
      [field: string]: string;
    };
  }[];
} = {
  "hive-control": [
    {
      title: "Project",
      description:
        "This account represents the centralized state and configurations of a project on the Honeycomb Protocol.",
      pda_seeds: "[ 'project', key ]",
      pda_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.getProjectPda.html",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/state/project_state/struct.Project.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/classes/_honeycomb_protocol_hive_control.Project.html",
      fields: {
        bump: "Bump value used for PDA.",
        authority: "Public key of the authority controlling this project.",
        key: "Unique public key discriminator for this project account.",
        driver:
          "Public key of the driver wallet having partial authority of this project.",
        name: "Name of the project.",
        mint_indexing:
          "Indexing information for the associated mints of the NFT Collection.",
        services: "List of honeycomb services associated with this project.",
        collections:
          "List of nft collections (public keys) associated with this project.",
        creators:
          "List of public keys representing the nft creators involved in this project.",
        allowed_programs:
          "List of allowed programs that can interact (CPI) with this project.",
        profile_data_config:
          "Configuration for profile data stored as key-value pairs in a HashMap.",
      },
    },
    {
      title: "Delegate Authority",
      description:
        "This account stores permissions granted to accounts to perform certain actions on behalf of the project authority.",
      pda_seeds: "[ 'delegate_authority', project, authority, delegate ]",
      pda_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.get_delegate_authority_pda.html",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/state/delegate_state/struct.delegate_authority.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/classes/_honeycomb_protocol_hive_control.delegate_authority.html",
      fields: {
        bump: "Bump value used for PDA.",
        project:
          "Public key of the project associated with this delegated authority.",
        authority: "Public key of the authority getting these permissions.",
        delegations:
          "List of service delegations, each specifying the program and its permissions.",
      },
    },
    {
      title: "Address Container",
      description:
        "Addresses are associated with a particular role, specified by `AddressContainerRole`.",
      pda_seeds: "[ 'address_container', role, associated_with, index ]",
      pda_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.get_address_container_pda.html",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/state/indexing_state/struct.address_container.html",
      solita_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/state/indexing_state/struct.address_container.html",
      fields: {
        bump: "Bump value used for PDA.",
        associated_with:
          "Public key of the account associated with this address container.",
        role: "Role of this address container, specifying its purpose (e.g., ProjectMints).",
        addresses:
          "List of service delegations, each specifying the program and its permissions.",
      },
    },
    {
      title: "User",
      description:
        "This account represents the state of a user on the Solana blockchain.",
      pda_seeds: "[ 'user', username ]",
      pda_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.get_user_pda.html",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/state/user_state/struct.user.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/classes/_honeycomb_protocol_hive_control.user.html",
      fields: {
        bump: "Bump value used for PDA.",
        primary_wallet:
          "Public key of the primary wallet associated with the user.",
        secondary_wallets:
          "List of public keys representing secondary wallets associated with the user.",
        username: "Username of the user.",
        name: "Full name of the user.",
        bio: "User's biography or description.",
        pfp: "URL of the user's profile picture (pfp).",
      },
    },
    {
      title: "Wallet Resolver",
      description: "Account representing a wallet resolver.",
      pda_seeds: "[ 'wallet_resolver', wallet ]",
      pda_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.get_wallet_resolver_pda.html",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/state/user_state/struct.wallet_resolver.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/classes/_honeycomb_protocol_hive_control.wallet_resolver.html",
      fields: {
        bump: "Bump value used for PDA.",
        user: "Public key of the user associated with this wallet resolver.",
        wallet: "Public key of the wallet being resolved.",
      },
    },
    {
      title: "Profile",
      description:
        "This account stores a user's profile data associated with a specific project.",
      pda_seeds: "[ 'profile', project, user, identity ]",
      pda_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.get_profile_pda.html",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/state/user_state/struct.profile.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/classes/_honeycomb_protocol_hive_control.profile.html",
      fields: {
        bump: "Bump value used for PDA.",
        project: "Public key of the project associated with this profile.",
        user: "Public key of the user associated with this profile.",
        identity:
          "Identity of the profile, which can be Main, Wallet, or a custom Value.",
        data: "HashMap storing profile data as key-value pairs.",
      },
    },
  ],
};

function toTitleCase(str) {
  return str.replaceAll("_", " ").replaceAll(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export default function Accounts({ program }: { program: string }) {
  if (!accounts[program]) return <h3> Program not found </h3>;
  return accounts[program].map((a) => (
    <>
      <h2>{a.title}</h2>
      <Tabs>
        <TabItem value="description" label="Description">
          {a.description}
          <br />{" "}
          <a href={a.pda_link} target="_blank">
            PDA Seeds
          </a>{" "}
          <code>{a.pda_seeds}</code>
          <br />{" "}
          <a href={a.rust_link} target="_blank">
            Rust Documentation
          </a>
          <br />{" "}
          <a href={a.solita_link} target="_blank">
            Solita Documentation
          </a>
        </TabItem>
        <TabItem value="fields" label="Fields">
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Decription</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(a.fields).map(([field, description]) => (
                <tr>
                  <td>
                    <strong>{toTitleCase(field)}</strong>
                  </td>
                  <td>{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabItem>
      </Tabs>
    </>
  ));
}
