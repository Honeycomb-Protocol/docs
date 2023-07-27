import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

const instructions: {
  [program: string]: {
    title: string;
    description: string;
    rust_link: string;
    solita_link: string;
    accounts: {
      [field: string]: string;
    };
    args: {
      [field: string]: string;
    };
  }[];
} = {
  "hive-control": [
    {
      title: "Create Project",
      description: "",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/project_instructions/fn.create_project.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createCreateProjectInstruction.html",
      accounts: {},
      args: {},
    },
    {
      title: "Change Driver",
      description: "",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/project_instructions/fn.change_driver.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createChangeDriverInstruction.html",
      accounts: {},
      args: {},
    },
    {
      title: "Add/Remove Criteria",
      description: "",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/project_instructions/fn.add_remove_criteria.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createAddRemoveCriteriaInstruction.html",
      accounts: {},
      args: {},
    },
    {
      title: "Add/Remove Service",
      description: "",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/project_instructions/fn.add_remove_service.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createAddRemoveServiceInstruction.html",
      accounts: {},
      args: {},
    },
    {
      title: "Add/Remove Profile Data Config",
      description: "",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/project_instructions/fn.add_remove_profile_data_config.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createAddRemoveProfileDataConfigInstruction.html",
      accounts: {},
      args: {},
    },
    {
      title: "Clear Profile Data Config",
      description: "",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/project_instructions/fn.clear_profile_data_config.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createClearProfileDataConfigInstruction.html",
      accounts: {},
      args: {},
    },
    {
      title: "Add Address Container to Project",
      description: "",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/project_instructions/fn.add_address_container_to_project.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createAddAddressContainerToProjectInstruction.html",
      accounts: {},
      args: {},
    },
    {
      title: "Add Mint Addresses to Address Container",
      description: "",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/project_instructions/fn.add_mint_addresses_to_address_container.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createAddMintAddressesToAddressContainerInstruction.html",
      accounts: {},
      args: {},
    },
    {
      title: "Create Delegate Authority",
      description: "",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/delegate_instructions/fn.create_delegate_authority.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createCreateDelegateAuthorityInstruction.html",
      accounts: {},
      args: {},
    },
    {
      title: "Add/Remove Delegation",
      description: "",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/delegate_instructions/fn.add_remove_delegation.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createAddRemoveDelegationInstruction.html",
      accounts: {},
      args: {},
    },
    {
      title: "Initialize User",
      description: "",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/user_instructions/fn.initialize_user.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createInitializeUserInstruction.html",
      accounts: {},
      args: {},
    },
    {
      title: "Update User",
      description: "",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/user_instructions/fn.update_user.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createUpdateUserInstruction.html",
      accounts: {},
      args: {},
    },
    {
      title: "Add Wallet",
      description: "",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/user_instructions/fn.add_wallet.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createAddWalletInstruction.html",
      accounts: {},
      args: {},
    },
    {
      title: "Delete Wallet",
      description: "",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/user_instructions/fn.delete_wallet.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createDeleteWalletInstruction.html",
      accounts: {},
      args: {},
    },
    {
      title: "Create Profile",
      description: "",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/profile_instructions/fn.create_profile.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createCreateProfileInstruction.html",
      accounts: {},
      args: {},
    },
    {
      title: "Add Profile Data",
      description: "",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/profile_instructions/fn.add_profile_data.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createAddProfileDataInstruction.html",
      accounts: {},
      args: {},
    },
    {
      title: "Modify Profile Data",
      description: "",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/profile_instructions/fn.modify_profile_data.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createModifyProfileDataInstruction.html",
      accounts: {},
      args: {},
    },
    {
      title: "Remove Profile Data",
      description: "",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/profile_instructions/fn.remove_profile_data.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createRemoveProfileDataInstruction.html",
      accounts: {},
      args: {},
    },
    {
      title: "Verify Profile Entity Data",
      description: "",
      rust_link:
        "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/profile_instructions/fn.verify_profile_entity_data.html",
      solita_link:
        "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createVerifyProfileEntityDataInstruction.html",
      accounts: {},
      args: {},
    },
  ],
};

function toTitleCase(str) {
  return str.replaceAll("_", " ").replaceAll(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export default function Accounts({ program }: { program: string }) {
  if (!instructions[program]) return <h3> Program not found </h3>;
  return instructions[program].map((a) => (
    <>
      <h2>{a.title}</h2>
      <Tabs>
        <TabItem value="description" label="Description">
          {a.description}
          <br />{" "}
          <a href={a.rust_link} target="_blank">
            Rust Documentation
          </a>
          <br />{" "}
          <a href={a.solita_link} target="_blank">
            Solita Documentation
          </a>
        </TabItem>
        <TabItem value="args" label="Arguements">
          <table>
            <thead>
              <tr>
                <th>Arguement</th>
                <th>Decription</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(a.args).map(([arg, description]) => (
                <tr>
                  <td>
                    <strong>{toTitleCase(arg)}</strong>
                  </td>
                  <td>{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabItem>
        <TabItem value="accounts" label="Accounts">
          <table>
            <thead>
              <tr>
                <th>Account</th>
                <th>Decription</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(a.accounts).map(([account, description]) => (
                <tr>
                  <td>
                    <strong>{toTitleCase(account)}</strong>
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
