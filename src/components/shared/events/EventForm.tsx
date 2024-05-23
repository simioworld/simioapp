"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { eventFormSchema } from "@/lib/validator";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import {
  carCategory,
  eventDefaultValues,
  simulators,
  staatliches,
} from "@/constants";
import Price from "./Price";
import Car from "./Car";
import Location from "./Location";
import Person from "./Person";
import Timer from "./Timer";
import { toast } from "sonner";
import { Id } from "../../../../convex/_generated/dataModel";
import { useUser } from "@clerk/nextjs";

interface EventFormProps {
  userId: string;
  type: "Crear" | "Editar";
}
const EventForm = ({ type }: EventFormProps) => {
  const router = useRouter();
  const { isSignedIn, user } = useUser();

  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: eventDefaultValues,
  });

  const createEvent = useMutation(api.events.createEvent);
  const SubmitHandler = async (values: z.infer<typeof eventFormSchema>) => {
    const communityId = useQuery(api.community.getCommunityId, {
      communityName: values.communityName,
    });
    if (type === "Crear") {
      try {
        if (!isSignedIn)
          throw new Error("Para crear un evento hay que estar autenticado");
        if (!user) throw new Error("No hay usuario autenticado");

        if (!communityId) throw new Error("No se encontro la comunidad");

        const newEvent = await createEvent({
          title: values.title,
          eventType: values.eventType,
          carCategory: values.carCategory,
          location: values.location,
          simulator: values.simulator,
          description: values.description,
          startDate: values.startDate,
          startTime: values.startTime,
          duration: values.duration,
          slots: values.slots,
          price: values.price,
          communityName: values.communityName,
          communityId: communityId,
          discordCommunity: values.discordCommunity,
          authorId: user.id as Id<"users">,
          userName: user.username as string,
        });

        if (newEvent) {
          toast.success("Evento creado correctamente");
          form.reset();
          router.push(`/dashboard/events/${newEvent}`);
        }
      } catch (error) {
        toast.error("Error al crear el evento");
      }
    }
  };

  return (
    <article className="p-2 overflow-hidden flex flex-col place-items-center w-full sm:min-w-3/5    z-20 text-slate-100/80">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(SubmitHandler)}
          className="flex flex-col gap-5 w-full px-4"
        >
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full space-y-0">
                  <FormLabel className="">Título</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Pachanga con amigos"
                      {...field}
                      className="input-field text-slate-800"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4 ">
              <FormField
                control={form.control}
                name="eventType"
                render={({ field }) => (
                  <FormItem className="w-full space-y-0">
                    <FormLabel className="">Tipo</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Carrera" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Carrera">Carrera</SelectItem>
                        <SelectItem value="Campeonato">Campeonato</SelectItem>
                        <SelectItem value="Reto">Reto</SelectItem>
                        <SelectItem value="Resistencia">Resistencia</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="simulator"
                render={({ field }) => (
                  <FormItem className="w-full space-y-0">
                    <FormLabel className="">Simulador</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona simulador" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {simulators.map((simulator) => (
                          <SelectItem key={simulator} value={simulator}>
                            {simulator}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4 ">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="w-full space-y-0">
                    <FormLabel className="">Circuito</FormLabel>
                    <FormControl>
                      <div className="flex items-center overflow-hidden h-7 w-full rounded-md bg-neutral-100 py-2 text-sm relative">
                        <Location
                          stroke="#333"
                          className="lucide lucide-map-pin absolute left-1 top-1/2 transform -translate-y-1/2"
                        />
                        <Input
                          placeholder="Barcelona"
                          {...field}
                          className="input-field pl-6"
                        />
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="carCategory"
                render={({ field }) => (
                  <FormItem className="w-full space-y-0">
                    <FormLabel className="">Categoría</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <div className="flex items-center overflow-hidden h-7 w-full rounded-md bg-neutral-100  py-2 text-sm relative">
                          <Car
                            stroke="#333"
                            className="lucide lucide-car absolute left-1 top-1/2 transform -translate-y-1/2 "
                          />
                          <SelectTrigger className="pl-6">
                            <SelectValue placeholder="GT2" />
                          </SelectTrigger>
                        </div>
                      </FormControl>
                      <SelectContent>
                        {carCategory.map((car) => (
                          <SelectItem key={car} value={car}>
                            {car}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4 ">
              <FormField
                control={form.control}
                name="communityName"
                render={({ field }) => (
                  <FormItem className="w-full space-y-0">
                    <FormLabel className="">Organizador</FormLabel>
                    <FormControl>
                      <div className="flex items-center overflow-hidden h-7 w-full rounded-md bg-neutral-100 py-2 text-sm relative">
                        <Input
                          placeholder="Comunidad"
                          {...field}
                          className="input-field pl-2"
                        />
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="discordCommunity"
                render={({ field }) => (
                  <FormItem className="w-full space-y-0">
                    <FormLabel className="">Discord</FormLabel>
                    <FormControl>
                      <div className="flex items-center overflow-hidden h-7 w-full rounded-md bg-neutral-100 py-2 text-sm relative">
                        <Input
                          placeholder="Enlace"
                          {...field}
                          className="input-field pl-2"
                        />
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel>Descripción</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Detalla las características del evento: tipo de parada (obligatoria/opcional, ventana, repostaje, cambio de ruedas...), formato de clasificación, nivel de dificultad, etc"
                      className="resize-none bg-neutral-100 text-slate-800"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4 ">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormLabel className="">Precio</FormLabel>
                    <FormControl>
                      <div className="flex items-center overflow-hidden h-7 rounded-md bg-neutral-100 py-2 text-sm relative">
                        <Price
                          stroke="#333"
                          className="lucide lucide-euro absolute left-1 top-1/2 transform -translate-y-1/2"
                        />

                        <Input
                          placeholder=""
                          {...field}
                          className="input-field pl-6"
                        />
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slots"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormLabel className="">Plazas</FormLabel>
                    <FormControl>
                      <div className="flex items-center overflow-hidden h-7 rounded-md bg-neutral-100 py-2 text-sm relative">
                        <Person
                          stroke="#333"
                          className="lucide lucide-user-round absolute left-1 top-1/2 transform -translate-y-1/2 "
                        />
                        <Input
                          placeholder=""
                          {...field}
                          className="input-field pl-6"
                        />
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4 ">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormLabel className="">Fecha</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        placeholder="Fecha del evento"
                        {...field}
                        className="input-field"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="startTime"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormLabel className="">Hora</FormLabel>
                    <FormControl>
                      <Input
                        type="time"
                        placeholder="Hora del evento"
                        {...field}
                        className="input-field"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormLabel className="">Duración</FormLabel>
                    <FormControl>
                      <div className="flex items-center overflow-hidden h-7 rounded-md bg-neutral-100 py-2 text-sm relative">
                        <Timer
                          stroke="#333"
                          className="lucide lucide-hour-glass absolute left-1 top-1/2 transform -translate-y-1/2"
                        />
                        <Input
                          type="text"
                          placeholder="minutos"
                          {...field}
                          className="pl-6 input-field"
                        />
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button
            className={`bg-orange-500/90 py-1 text-xl text-slate-800 ${staatliches.className} hover:bg-orange-500`}
            type="submit"
          >
            {type} evento
          </Button>
        </form>
      </Form>
    </article>
  );
};

export default EventForm;
