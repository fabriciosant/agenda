import * as React from "react";
import { Plus, ChevronDown } from "lucide-react";

import { Calendars } from "@/components/calendars";
import { DatePicker } from "@/components/date-picker";
import { NavUser } from "@/components/nav-user";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Agenda",
    email: "user@gmail.com",
  },
  calendars: [
    {
      name: "Minhas agendas",
      items: ["Pessoal", "Trabalho", "Familia"],
    },
    {
      name: "Favoritos",
      items: ["Feriados", "Aniversário"],
    },
    {
      name: "Outros",
      items: ["Viagem", "Lembretes", "Prazos"],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-sidebar-border h-16 border-b">
        <NavUser />
      </SidebarHeader>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="mx-18 justify-between py-6 rounded-4xl"
          >
            <Plus />
            Criar
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem>Eventos</DropdownMenuItem>
            <DropdownMenuItem>Tarefas</DropdownMenuItem>
            <DropdownMenuItem>Horários</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <SidebarContent>
        <DatePicker />
        <SidebarSeparator className="mx-0" />
        <Calendars calendars={data.calendars} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
