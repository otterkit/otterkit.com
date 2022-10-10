import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { Autocomplete, Divider, useMantineTheme } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons";
import { appMetadata } from "../metadata/appMetadata";


const autocompleteLabels = appMetadata
  .map((metadata) => (metadata.links ? metadata.links.map((item) => item.label) : metadata.label))
  .flatMap((array) => array);
const autocompleteUrls = appMetadata
  .map((metadata) => (metadata.links ? metadata.links.map((item) => item.href) : metadata.href))
  .flatMap((array) => array);
const labelsAndUrls = autocompleteLabels.map((labels, index) => ({
  label: labels,
  href: autocompleteUrls[index],
}));

export function OtterkitSearch(props: any) {
  const ref = useRef<HTMLInputElement>(null);
  useHotkeys([['/', () => ref.current?.focus()]]);
  const [value, setValue] = useState('');
  const theme = useMantineTheme()
  const router = useRouter();

  return (
    <>
      <Autocomplete
        aria-label="Search"
        styles={(theme) => ({
          input: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
            '&:focus': {
              borderColor: '#6495ed'
            }
          },
          dropdown: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
            borderRadius: theme.radius.lg,
          },
          item: {
            borderRadius: theme.radius.xl,
            marginBlock: 2,
            paddingInline: 16,
            '&[data-hovered="true"]': {
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
            }
          },
          icon: {
            color: '#6495ed'
          }
        })}
        radius="xl"
        placeholder="Search (''/'' to focus)"
        icon={<IconSearch size={16} />}
        limit={5}
        ref={ref}
        value={value}
        onChange={setValue}
        data={autocompleteLabels}
        onItemSubmit={(event) => {
          router.push(labelsAndUrls.find((item) => event.value === item.label)?.href!);
          setValue('');
          props.openState(false);
        }}
      />
      <Divider color={theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]} my="sm" />
    </>
  );
}
  