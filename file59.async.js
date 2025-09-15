"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[7589],{83112:function(t,n,e){e.r(n),n.default=`## Monorepo \u5DE5\u5177

### Lerna
Lerna \u662F\u4E00\u4E2A\u7528\u4E8E\u7BA1\u7406\u5305\u542B\u591A\u4E2A\u5305\u7684 JavaScript \u9879\u76EE\u7684\u5DE5\u5177\uFF0C\u7279\u522B\u9002\u5408\u7BA1\u7406\u76F8\u4E92\u4F9D\u8D56\u7684\u5305\u3002\u5B83\u4F18\u5316\u4E86\u5DE5\u4F5C\u6D41\u7A0B\uFF0C\u7B80\u5316\u4E86\u591A\u5305\u7BA1\u7406\u3001\u4F9D\u8D56\u94FE\u63A5\u548C\u7248\u672C\u53D1\u5E03\u3002

### Turborepo
Turborepo \u89E3\u51B3 monorepo \u7684\u6269\u5C55\u95EE\u9898\u3002


## \u62D6\u62FD\u5DE5\u5177

### @dnd-kit
\u652F\u6301\u62D6\u62FD\u6392\u5E8F\u7B49\u3002
\`\`\`jsx
import { DndContext, DragEndEvent, MouseSensor, useSensor, useSensors } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  SortingStrategy,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { restrictToParentElement } from "@dnd-kit/modifiers";

type IDragItem = {};
export const DraggableItem = ({
  children,
  item,
}: {
  children: React.ReactNode;
  item: IDragItem;
}) => {
  const { isDragging, attributes, listeners, transform, setNodeRef, transition } = useSortable({
    id: item.id!,
  });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      draggable
      style={{
        position: "relative",
        zIndex: isDragging ? 9999 : 1,
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      {children}
    </div>
  );
};

export const DraggableWrap = ({
  items,
  strategy = verticalListSortingStrategy,
  renderItem,
  updateItems,
}: {
  items: IDragItem[];
  strategy?: SortingStrategy;
  renderItem: (item: IDragItem) => JSX.Element;
  updateItems: (newItems: IDragItem[]) => void;
}) => {
  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active && over && active.id !== over.id) {
      const activeIndex = items.findIndex((t) => t.id === active.id);
      const overIndex = items.findIndex((t) => t.id === over.id);
      const newList = arrayMove(items, activeIndex, overIndex);
      updateItems(newList);
    }
  };

  // \u4F20\u611F\u5668\uFF0C\u89E3\u51B3\u5305\u88F9\u7EC4\u4EF6\u65E0\u6CD5\u70B9\u51FB\u7684\u95EE\u9898
  const sensors = useSensors(useSensor(MouseSensor, { activationConstraint: { distance: 5 } }));

  return (
    <DndContext
      onDragEnd={(e) => onDragEnd(e)}
      sensors={sensors}
      modifiers={[restrictToParentElement]} // \u9650\u5236\u5728\u7236\u5BB9\u5668\u5185
    >
      <SortableContext items={items?.map((en: any) => en.id)} strategy={strategy}>
        {items?.map((item) => (
          <DraggableItem item={item} key={item.id}>
            {renderItem(item)}
          </DraggableItem>
        ))}
      </SortableContext>
    </DndContext>
  );
};
\`\`\`

### react-resizable
\u8868\u683C\u5217\u5BBD\u5EA6\u8C03\u6574\u3002
\`\`\`jsx
const ResizeableTitle = (props: any) => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      minConstraints={[70, 30]}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

const ResizeableTable = () => {
  const components = {
    header: {
      cell: ResizeableTitle,
    },
  };
  return (
    <Table components={components} />
  )
}
\`\`\`

### react-grid-layout
\u62D6\u62FD\u5E03\u5C40\u3002
\`\`\`jsx
import GridLayout from "react-grid-layout";

// \u4F7F\u7528
<GridLayout layout={[]} cols={60} />
\`\`\`
`}}]);
