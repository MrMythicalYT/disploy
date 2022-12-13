import type { APIMessageApplicationCommandInteraction } from 'discord-api-types/v10';
import type { App } from '../client';
import { ContextMenuInteraction } from './ContextMenuCommand';
import type { Message } from './Message';

export class MessageContextMenuInteraction extends ContextMenuInteraction {
	/**
	 * The target message.
	 */
	public readonly targetMessage: Message;

	public constructor(app: App, raw: APIMessageApplicationCommandInteraction) {
		super(app, raw);

		const resolvedMessage = raw.data.resolved.messages[this.targetId]!;
		this.targetMessage = app.messages.constructMessage({ ...resolvedMessage, guild_id: this.guild?.id });
	}
}
