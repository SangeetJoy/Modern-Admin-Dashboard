import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TopBar from "../../components/TopBar/TopBar";
import { cardsData } from "../../../data";
import TaskCard from "../../components/TaskCard/TaskCard";
import type { Card as CardType } from "../../types";

type DragItem = {
  id: number;
  type: string;
};

type KanbanColumn = {
  id: string;
  text: string;
};

const ItemType = { CARD: "card" } as const;

const columnsData: KanbanColumn[] = [
  { id: "readyForDev", text: "Ready For Dev" },
  { id: "inProgress", text: "In Progress" },
  { id: "blocked", text: "Blocked" },
  { id: "done", text: "Done" },
];

const borderColorMap: Record<string, string> = {
  readyForDev: "border-b-blue-300",
  inProgress: "border-b-yellow-300",
  blocked: "border-b-red-300",
  done: "border-b-green-300",
};

// 🧩 Renamed to avoid name clash with imported `CardType`
const Card = ({ card }: { card: CardType }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.CARD,
    item: { id: card.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className="mt-3">
      <TaskCard
        ref={drag}
        isDragging={isDragging}
        priority={card.priority}
        text={card.text}
        subText={card.subText}
        assignees={card.assignees}
        comments={card.comments}
        links={card.links}
        progress={card.progress}
      />
    </div>
  );
};

const Column = ({
  kanban,
  cards,
  moveCard,
}: {
  kanban: KanbanColumn;
  cards: CardType[];
  moveCard: (cardId: number, targetColumnId: string) => void;
}) => {
  const borderColor = borderColorMap[kanban.id] || "";

  const [, drop] = useDrop<DragItem>(() => ({
    accept: ItemType.CARD,
    drop: (item) => {
      moveCard(item.id, kanban.id);
    },
  }));

  return (
    <div
      ref={drop as unknown as React.Ref<HTMLDivElement>}
      className="
        flex flex-col
        w-90
        bg-stone-50
        rounded-2xl
        overflow-hidden
        flex-shrink-0
      "
    >
      <div
        className={`text-stone-700 font-semibold text-sm px-4 py-3 border-b-[3px] ${borderColor}`}
      >
        {kanban.text}
      </div>

      <div
        className="
          flex-1
          overflow-y-auto
          p-3
          space-y-4
        "
        style={{ minHeight: "0" }}
      >
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

const Board = () => {
  const [cards, setCards] = useState<CardType[]>(cardsData);
  const [kanbans] = useState<KanbanColumn[]>(columnsData);

  const moveCard = (cardId: number, targetColumnId: string) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === cardId ? { ...card, column_id: targetColumnId } : card
      )
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-white">
        <TopBar />

        <div className="p-6">
          <div
            className="
              bg-white
              rounded-lg
              flex
              gap-6
              overflow-x-auto
              min-h-[80vh]
              max-h-[80vh]
              justify-between
            "
          >
            {kanbans.map((kanban) => (
              <Column
                key={kanban.id}
                kanban={kanban}
                cards={cards.filter((card) => card.column_id === kanban.id)}
                moveCard={moveCard}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Board;
