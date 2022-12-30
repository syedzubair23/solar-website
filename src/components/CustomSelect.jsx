import { Fragment, useState, useEffect } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";


export default function CustomSelect({ option, number }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(number ? 1 : option[0]);
  console.log(selected)
  const filteredoption =
    query === ''
      ? option
      : option.filter((opt) =>
          number ?
          String(opt + 1)
            .replace(/\s+/g, "")
            .includes(query.replace(/\s+/g, ""))
          :
          opt.item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className="w-full">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-300 sm:text-sm">
            <Combobox.Input
            className="text-white/50 bg-white/10 border border-gray-600 text-sm rounded-lg w-full pl-4 pr-7 py-3 shadow-sm outline-[#9FE221] leading-5 focus:ring-0"
              displayValue={(opt) => opt.item ?? opt}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400 hover:text-[#9FE221]"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options
              className={`
            absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#04303F] py-1 text-base shadow-lg ring-1 ring-white/20 ring-opacity-5 focus:outline-none sm:text-sm`}
            >
              {filteredoption.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-[#9FE221]">
                  Nothing found
                </div>
              ) : (
                filteredoption.map((opt) => (
                  <Combobox.Option
                    key={opt.id || opt}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-11 pr-4 ${
                        active ? "bg-white/10 text-[#9FE221]" : "text-white"
                      }`
                    }
                    value={number ? opt + 1 : opt}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium text-[#9FE221]" : "font-normal text-white"
                          }`}
                        >
                          {number ? opt + 1 : opt.item}
                        </span>
                        {selected ? (
                          <span
                            className="absolute inset-y-0 left-0 flex items-center pl-4"
                          >
                            <CheckIcon className={`h-5 w-5 ${
                              selected ? "text-[#9FE221]" : "text-white"
                            }`} aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}