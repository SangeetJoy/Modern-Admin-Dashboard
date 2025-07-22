import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TopBar from "../../components/TopBar/TopBar";

const ItemType = { CARD: "card" };

const columnsData = [
  { id: "readyForDev", text: "Ready For Dev" },
  { id: "inProgress", text: "In Progress" },
  { id: "blocked", text: "Blocked" },
  { id: "done", text: "Done" },
];

const cardsData = [
  { id: 1, column_id: "readyForDev", text: "Card 1" },
  { id: 2, column_id: "inProgress", text: "Card 2" },
  { id: 3, column_id: "readyForDev", text: "Card 3" },
  { id: 4, column_id: "readyForDev", text: "Card 4" },
  { id: 5, column_id: "readyForDev", text: "Card 5" },
  { id: 6, column_id: "readyForDev", text: "Card 6" },
  { id: 7, column_id: "readyForDev", text: "Card 7" },
  { id: 8, column_id: "readyForDev", text: "Card 8" },
  { id: 9, column_id: "readyForDev", text: "Card 9" },
  { id: 10, column_id: "readyForDev", text: "Card 10" },
  { id: 11, column_id: "readyForDev", text: "Card 11" },
  { id: 12, column_id: "readyForDev", text: "Card 12" },
];

const Card = ({ card }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.CARD,
    item: { id: card.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`
        bg-white
        p-4
        rounded-lg
        border
        hover:shadow
        transition
        cursor-pointer
        ${isDragging ? "opacity-30" : ""}
      `}
    >
      <p className="text-sm text-gray-700">{card.text}</p>
    </div>
  );
};

const Column = ({ kanban, cards, moveCard }) => {
  const [, drop] = useDrop(() => ({
    accept: ItemType.CARD,
    drop: (item) => {
      moveCard(item.id, kanban.id);
    },
  }));

  return (
    <div
      ref={drop}
      className="
        flex flex-col
        w-80
        bg-stone-50
        rounded-lg
        overflow-hidden
        flex-shrink-0
      "
    >
      <div className="bg-stone-200 text-stone-700 font-semibold text-sm px-4 py-2">
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
  const [cards, setCards] = useState(cardsData);
  const [kanbans] = useState(columnsData);

  const moveCard = (cardId, targetColumnId) => {
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
