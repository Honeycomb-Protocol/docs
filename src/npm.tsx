import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default function Npm({
  dev,
  children,
}: {
  dev?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Tabs>
      <TabItem value="npm" label="NPM" default>
        <pre className="language-typescript">
          <code className="lang-typescript">{`npm install${
            dev ? " -D" : ""
          } ${children}`}</code>
        </pre>
      </TabItem>
      <TabItem value="yarn" label="Yarn">
        <pre className="language-typescript">
          <code className="lang-typescript">{`yarn add${
            dev ? " -D" : ""
          } ${children}`}</code>
        </pre>
      </TabItem>
    </Tabs>
  );
}
