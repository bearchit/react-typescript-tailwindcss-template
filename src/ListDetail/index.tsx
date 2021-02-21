import React from "react";
import Section from "./components/Section";
import ListItemComponent from "./components/ListItem";
import { useParams } from "react-router-dom";
import listData from "../data/list.json";

export interface List {
  id: number;
  title: string;
  description?: string;
  blocks: Block[];
}

export interface Block {
  kind: string;
  title?: string;
  items: ListItem[];
}

export interface ListItem {
  title: string;
  description: string;
  url: string;
  cover?: string;
}

export default function ListDetailScreen() {
  const { listID } = useParams<{ listID: string }>();
  const list: List | undefined = listData.find(
    (d) => d.id.toString() === listID
  );

  return (
    <>
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        {list?.blocks.map((block, bi) => (
          <div key={bi}>
            {block.kind === "section" && (
              <Section title={block.title!}>
                <ListItemsComponent items={block.items} />
              </Section>
            )}
          </div>
        ))}
      </main>
    </>
  );
}

interface ListItemsComponentProps {
  items: ListItem[];
}

function ListItemsComponent({ items }: ListItemsComponentProps) {
  return (
    <>
      {items.map((item: ListItem, idx) => (
        <ListItemComponent key={idx} item={item} />
      ))}
    </>
  );
}
