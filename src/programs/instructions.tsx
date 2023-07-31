import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

import {
  IDLs,
  camelToSnakeCase,
  camelToSpaceCase,
  toTitleCase,
} from "../utils";

const ignore = ["initPublicInfo", "setPublicInfo", "setAuthDriver"];

const getInstructions = (idl) =>
  idl.instructions
    .map((instruction) => {
      if (ignore.includes(instruction.name)) return null;
      return {
        title:
          instruction.name[0].toUpperCase() +
          camelToSpaceCase(instruction.name.slice(1)),
        description: instruction.docs?.join("") || "",
        rust_link: `https://docs.rs/${idl.name.replace("_", "-")}/${
          idl.version
        }/${idl.name}/${idl.name}/fn.${camelToSnakeCase(
          instruction.name
        )}.html`,
        solita_link: `https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_${idl.name.replace(
          "hpl_",
          ""
        )}.create${
          instruction.name[0].toUpperCase() + instruction.name.slice(1)
        }Instruction.html`,
        accounts: instruction.accounts.map((a) => ({
          ...a,
          name: a.name[0].toUpperCase() + camelToSpaceCase(a.name.slice(1)),
          description: a.docs?.join("") || "",
        })),
        args: instruction.args.map((a) => {
          if (typeof a.type === "string") return a;

          return {
            ...a,
            type: a.type.defined,
            link: `https://typedoc.honeycombprotocol.com/types/_honeycomb_protocol_${idl.name.replace(
              "hpl_",
              ""
            )}.${a.type.defined}.html`,
          };
        }),
      };
    })
    .filter((x) => !!x);

const instructions: {
  [program: string]: {
    title: string;
    description: string;
    rust_link: string;
    solita_link: string;
    accounts: {
      name: string;
      isMut: boolean;
      isSigner: boolean;
      isOptional?: boolean;
      description: string;
    }[];
    args: {
      name: string;
      type: string;
      link?: string;
    }[];
  }[];
} = {
  "hive-control": getInstructions(IDLs["hive-control"]),
  "currency-manager": getInstructions(IDLs["currency-manager"]),
  "nectar-staking": getInstructions(IDLs["nectar-staking"]),
  "nectar-missions": getInstructions(IDLs["nectar-missions"]),
};

// {
//   "hive-control": [
//     {
//       title: "Create Project",
//       description: "",
//       rust_link:
//         "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/project_instructions/fn.create_project.html",
//       solita_link:
//         "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createCreateProjectInstruction.html",
//       accounts: {},
//       args: {},
//     },
//     {
//       title: "Change Driver",
//       description: "",
//       rust_link:
//         "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/project_instructions/fn.change_driver.html",
//       solita_link:
//         "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createChangeDriverInstruction.html",
//       accounts: {},
//       args: {},
//     },
//     {
//       title: "Add/Remove Criteria",
//       description: "",
//       rust_link:
//         "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/project_instructions/fn.add_remove_criteria.html",
//       solita_link:
//         "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createAddRemoveCriteriaInstruction.html",
//       accounts: {},
//       args: {},
//     },
//     {
//       title: "Add/Remove Service",
//       description: "",
//       rust_link:
//         "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/project_instructions/fn.add_remove_service.html",
//       solita_link:
//         "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createAddRemoveServiceInstruction.html",
//       accounts: {},
//       args: {},
//     },
//     {
//       title: "Add/Remove Profile Data Config",
//       description: "",
//       rust_link:
//         "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/project_instructions/fn.add_remove_profile_data_config.html",
//       solita_link:
//         "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createAddRemoveProfileDataConfigInstruction.html",
//       accounts: {},
//       args: {},
//     },
//     {
//       title: "Clear Profile Data Config",
//       description: "",
//       rust_link:
//         "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/project_instructions/fn.clear_profile_data_config.html",
//       solita_link:
//         "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createClearProfileDataConfigInstruction.html",
//       accounts: {},
//       args: {},
//     },
//     {
//       title: "Add Address Container to Project",
//       description: "",
//       rust_link:
//         "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/project_instructions/fn.add_address_container_to_project.html",
//       solita_link:
//         "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createAddAddressContainerToProjectInstruction.html",
//       accounts: {},
//       args: {},
//     },
//     {
//       title: "Add Mint Addresses to Address Container",
//       description: "",
//       rust_link:
//         "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/project_instructions/fn.add_mint_addresses_to_address_container.html",
//       solita_link:
//         "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createAddMintAddressesToAddressContainerInstruction.html",
//       accounts: {},
//       args: {},
//     },
//     {
//       title: "Create Delegate Authority",
//       description: "",
//       rust_link:
//         "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/delegate_instructions/fn.create_delegate_authority.html",
//       solita_link:
//         "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createCreateDelegateAuthorityInstruction.html",
//       accounts: {},
//       args: {},
//     },
//     {
//       title: "Add/Remove Delegation",
//       description: "",
//       rust_link:
//         "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/delegate_instructions/fn.add_remove_delegation.html",
//       solita_link:
//         "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createAddRemoveDelegationInstruction.html",
//       accounts: {},
//       args: {},
//     },
//     {
//       title: "Initialize User",
//       description: "",
//       rust_link:
//         "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/user_instructions/fn.initialize_user.html",
//       solita_link:
//         "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createInitializeUserInstruction.html",
//       accounts: {},
//       args: {},
//     },
//     {
//       title: "Update User",
//       description: "",
//       rust_link:
//         "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/user_instructions/fn.update_user.html",
//       solita_link:
//         "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createUpdateUserInstruction.html",
//       accounts: {},
//       args: {},
//     },
//     {
//       title: "Add Wallet",
//       description: "",
//       rust_link:
//         "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/user_instructions/fn.add_wallet.html",
//       solita_link:
//         "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createAddWalletInstruction.html",
//       accounts: {},
//       args: {},
//     },
//     {
//       title: "Delete Wallet",
//       description: "",
//       rust_link:
//         "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/user_instructions/fn.delete_wallet.html",
//       solita_link:
//         "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createDeleteWalletInstruction.html",
//       accounts: {},
//       args: {},
//     },
//     {
//       title: "Create Profile",
//       description: "",
//       rust_link:
//         "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/profile_instructions/fn.create_profile.html",
//       solita_link:
//         "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createCreateProfileInstruction.html",
//       accounts: {},
//       args: {},
//     },
//     {
//       title: "Add Profile Data",
//       description: "",
//       rust_link:
//         "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/profile_instructions/fn.add_profile_data.html",
//       solita_link:
//         "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createAddProfileDataInstruction.html",
//       accounts: {},
//       args: {},
//     },
//     {
//       title: "Modify Profile Data",
//       description: "",
//       rust_link:
//         "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/profile_instructions/fn.modify_profile_data.html",
//       solita_link:
//         "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createModifyProfileDataInstruction.html",
//       accounts: {},
//       args: {},
//     },
//     {
//       title: "Remove Profile Data",
//       description: "",
//       rust_link:
//         "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/profile_instructions/fn.remove_profile_data.html",
//       solita_link:
//         "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createRemoveProfileDataInstruction.html",
//       accounts: {},
//       args: {},
//     },
//     {
//       title: "Verify Profile Entity Data",
//       description: "",
//       rust_link:
//         "https://docs.rs/hpl-hive-control/0.1.17/hpl_hive_control/instructions/profile_instructions/fn.verify_profile_entity_data.html",
//       solita_link:
//         "https://typedoc.honeycombprotocol.com/functions/_honeycomb_protocol_hive_control.createVerifyProfileEntityDataInstruction.html",
//       accounts: {},
//       args: {},
//     },
//   ],
// };

export default function Accounts({ program }: { program: string }) {
  if (!instructions[program]) return <h3> Program not found </h3>;
  return instructions[program].map((i) => (
    <>
      <h2>{i.title}</h2>
      <Tabs>
        <TabItem value="description" label="Description">
          {i.description}
          <br />{" "}
          <a href={i.rust_link} target="_blank">
            Rust Documentation
          </a>
          <br />{" "}
          <a href={i.solita_link} target="_blank">
            Solita Documentation
          </a>
        </TabItem>
        {i.args.length ? (
          <TabItem value="args" label="Arguements">
            <table>
              <thead>
                <tr>
                  <th>Arguement</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {i.args.map((arg) => (
                  <tr>
                    <td>
                      <strong>{toTitleCase(arg.name)}</strong>
                    </td>
                    <td>
                      {arg.link ? (
                        <a href={arg.link} target="_blank">
                          {arg.type}
                        </a>
                      ) : (
                        arg.type
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabItem>
        ) : null}
        <TabItem value="accounts" label="Accounts">
          <table>
            <thead>
              <tr>
                <th>Account</th>
                <th>Decription</th>
              </tr>
            </thead>
            <tbody>
              {i.accounts.map((account) => (
                <tr>
                  <td>
                    <strong>{toTitleCase(account.name)}</strong>
                  </td>
                  <td>{account.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabItem>
      </Tabs>
    </>
  ));
}
