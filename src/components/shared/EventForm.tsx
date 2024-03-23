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

import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

import Image from "next/image";
import { auth } from "@clerk/nextjs";

interface EventFormProps {
  type: "Crear" | "Editar";
}
const EventForm = ({ type }: EventFormProps) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      title: "",
      eventType: "Carrera",
      carCategory: "GT2",
      location: "",
      simulator: "iRacing",
      startDate: "",
      startTime: "",
      duration: "60",
      description: "",
      slots: "20",
      price: "",
      community: "",
      discordCommunity: "",
      /*
            isFree: true,
 */
    },
  });

  const createEvent = useMutation(api.events.createEvent);
  const onSubmit = async (values: z.infer<typeof eventFormSchema>) => {
    if (type === "Crear") {
      try {
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
          community: values.community,
          discordCommunity: values.discordCommunity,

          /*
  isFree: values.isFree,
        */
        });

        console.log(newEvent);
        if (newEvent) {
          form.reset();
          router.push(`/events/${newEvent}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <article className="p-2 overflow-hidden flex flex-col place-items-center w-full sm:min-w-3/5  shadow-lg rounded-lg relative  ">
      <Image
        src="/assets/images/neumaticos.webp"
        alt="marcas de neumaticos de fondo"
        width={800}
        height={100}
        className=" absolute h-full opacity-10 top-0 left-0 -z-10"
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full p-4"
        >
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel className="">Título</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Título del evento"
                      {...field}
                      className="input-field"
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
                        <SelectItem value="Entrenamiento">
                          Entrenamiento
                        </SelectItem>
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
                        <SelectItem value="ACC">ACC</SelectItem>
                        <SelectItem value="Assetto Corsa">
                          Assetto Corsa
                        </SelectItem>
                        <SelectItem value="Automobilista 2">
                          Automobilista 2
                        </SelectItem>

                        <SelectItem value="GT7">GT7</SelectItem>
                        <SelectItem value="iRacing">iRacing</SelectItem>

                        <SelectItem value="RaceRoom">RaceRoom</SelectItem>
                        <SelectItem value="rFactor 2">rFactor 2</SelectItem>
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
                        <Image
                          src="/assets/icons/location.svg"
                          alt="track"
                          width={16}
                          height={16}
                          className="absolute left-1 top-1/2 transform -translate-y-1/2 pl-1"
                        />
                        <Input
                          placeholder="Añade un circuito"
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
                          <Image
                            src="/assets/icons/car.svg"
                            alt="car"
                            width={16}
                            height={16}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2"
                          />
                          <SelectTrigger className="pl-7">
                            <SelectValue placeholder="GT2" />
                          </SelectTrigger>
                        </div>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="GT2">GT2</SelectItem>
                        <SelectItem value="GT3">GT3</SelectItem>
                        <SelectItem value="GT4">GT4</SelectItem>
                        <SelectItem value="Porsche Cup">Porsche Cup</SelectItem>
                        <SelectItem value="Otra">Otra</SelectItem>
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
                name="community"
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
                      placeholder="Detalla las características del evento"
                      className="resize-none bg-neutral-100"
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
                        <Image
                          src="/assets/icons/euro.svg"
                          alt="track"
                          width={16}
                          height={16}
                          className="absolute left-1 top-1/2 transform -translate-y-1/2 pl-1"
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
                        <Image
                          src="/assets/icons/person.svg"
                          alt="track"
                          width={16}
                          height={16}
                          className="absolute left-1 top-1/2 transform -translate-y-1/2 pl-1"
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
                        <Image
                          src="/assets/icons/clock.svg"
                          alt="track"
                          width={16}
                          height={16}
                          className="absolute left-1 top-1/2 transform -translate-y-1/2 pl-1"
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
          <Button type="submit">{type} evento</Button>
        </form>
      </Form>
    </article>
  );
};

export default EventForm;
