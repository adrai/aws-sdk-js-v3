import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { RedactChannelMessageRequest, RedactChannelMessageResponse } from "../models/models_1";
import {
  deserializeAws_restJson1RedactChannelMessageCommand,
  serializeAws_restJson1RedactChannelMessageCommand,
} from "../protocols/Aws_restJson1";

export interface RedactChannelMessageCommandInput extends RedactChannelMessageRequest {}
export interface RedactChannelMessageCommandOutput extends RedactChannelMessageResponse, __MetadataBearer {}

/**
 * <p>Redacts message content, but not metadata. The message exists in the back end, but the
 *          action returns null content, and the state shows as redacted.</p>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, RedactChannelMessageCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, RedactChannelMessageCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new RedactChannelMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RedactChannelMessageCommandInput} for command's `input` shape.
 * @see {@link RedactChannelMessageCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class RedactChannelMessageCommand extends $Command<
  RedactChannelMessageCommandInput,
  RedactChannelMessageCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RedactChannelMessageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RedactChannelMessageCommandInput, RedactChannelMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "RedactChannelMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RedactChannelMessageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RedactChannelMessageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RedactChannelMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RedactChannelMessageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RedactChannelMessageCommandOutput> {
    return deserializeAws_restJson1RedactChannelMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
