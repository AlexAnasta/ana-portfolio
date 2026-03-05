import type { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.tsx";

type TabsButtonsProps = {
	about?: ReactNode;
	portfolio?: ReactNode;
};

const TabsButtons = ({ about, portfolio }: TabsButtonsProps) => {
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
					value="portfolio"
				>
					Portfolio
				</TabsTrigger>
			</TabsList>
			<TabsContent value="about">{about}</TabsContent>
			<TabsContent value="portfolio">{portfolio}</TabsContent>
		</Tabs>
	);
};

export default TabsButtons;
