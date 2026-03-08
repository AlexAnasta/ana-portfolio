import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.tsx";

import type { ReactNode } from "react";

type TabsButtonsProps = {
	about?: ReactNode;
	contribution?: ReactNode;
	communication?: ReactNode;
	skills?: ReactNode;
};

const TabsButtons = ({ about, contribution, communication, skills }: TabsButtonsProps) => {
	return (
		<Tabs defaultValue="about" className="w-full ">
			<TabsList
				className={"bg-white dark:bg-n700  w-full px-2 py-8 rounded-xl"}
			>
				<TabsTrigger
					className={
						"w-full py-4 rounded-lg dark:data-[state=active]:text-primary-dark data-[state=active]:bg-light-theme dark:data-[state=active]:bg-dark-theme"
					}
					value="about"
				>
					About
				</TabsTrigger>
        <TabsTrigger
					className={
						"w-full py-4 rounded-lg dark:data-[state=active]:text-primary-dark data-[state=active]:bg-light-theme dark:data-[state=active]:bg-dark-theme"
					}
					value="contribution"
				>
					Contribution
				</TabsTrigger>
				<TabsTrigger
					className={
						"w-full py-4 rounded-lg dark:data-[state=active]:text-primary-dark data-[state=active]:bg-light-theme dark:data-[state=active]:bg-dark-theme"
					}
					value="communication"
				>
					Communication
				</TabsTrigger>
				<TabsTrigger
					className={
						"w-full py-4 rounded-lg dark:data-[state=active]:text-primary-dark data-[state=active]:bg-light-theme dark:data-[state=active]:bg-dark-theme"
					}
					value="skills"
				>
					Skills
				</TabsTrigger>
			</TabsList>
			<TabsContent value="about">{about}</TabsContent>
			<TabsContent value="contribution">{contribution}</TabsContent>
			<TabsContent value="communication">{communication}</TabsContent>
			<TabsContent value="skills">{skills}</TabsContent>
		</Tabs>
	);
};

export default TabsButtons;
