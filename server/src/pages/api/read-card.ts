import { createClient } from "@/src/utils/supabase/client";
import { CARD_READER_CHANNEL } from "@/src/utils/utils";
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
	const val = req.query.val;
	res.end();

	if (!val) return;

	const supabase = createClient();
	// supabase.from(Tables.CardRead).insert({ card_id: val });

	const channel = supabase.channel(CARD_READER_CHANNEL);
	channel.send({ type: "broadcast", event: CARD_READER_CHANNEL, payload: { cardId: val } });
};